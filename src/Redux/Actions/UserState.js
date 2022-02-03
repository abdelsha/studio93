import { auth, provider, storage } from "../../Firebase/Firebase";
import db from "../../Firebase/Firebase";

//Action:
const email = "amrshakour97@gmail.com";
export const SET_USER = "SET_USER";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_EXPERIENCE= "GET_EXPERIENCE";
export const GET_PROFILE="GET_PROFILE";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export function postArticleApi(payload) {
  return (dispatch) => {
      dispatch(setLoading(true));


      if (payload.image !=""){
          const upload = storage
          .ref(`images/${payload.image.name}`)
          .put(payload.image);
      upload.on('state_changed', (snapshot) => {
          const progress =
              (snapshot.bytesTransferred/snapshot.totalBytes) *100;

          //console.log(`progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
              console.log(`progress: ${progress}%`);
          }
      }, error => console.log(error.code),
      async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection(`article`).add({
              actor: {
                  description: payload.user.email,
                  title: payload.user.displayName,
                  date: payload.timestamp, 
                  image: payload.user.photoURL
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments:0,
              description:payload.description,
          })
          dispatch(setLoading(false));
      }
      )
  }else if (payload.video){
      db.collection(`article`).add({
          actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp, 
              image: payload.user.photoURL
          },
          video: payload.video,
          sharedImg: "",
          comments:0,
          description:payload.description,
      })
      dispatch(setLoading(false));
  }
      
  };
}

export function getArticlesAPI() {
  return (dispatch) => {
      let payload;
      
      db.collection("article")
      .orderBy("actor.date","desc")
      .onSnapshot((snapshot) => {
          payload= snapshot.docs.map((doc) => doc.data());
          //console.log(payload)
          dispatch(getArticles(payload));
      });
  };
}

