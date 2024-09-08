import { configureStore } from "@reduxjs/toolkit";
import lms from "./feature/lms";


export default configureStore({
  reducer: {
    lms:lms 
  },
});