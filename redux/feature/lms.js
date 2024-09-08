import { courses } from "@/utilities/file";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const lms = createSlice({
  name: "products",
  courses: [],
  initialState: {
    nav: true,
  },
  reducers: {
    setNav: (state, action) => {
      state.nav = action.payload;
    },

    getCourses: (state, action) => {
      const item = action.payload;

      if (item == "All Courses") {
        state.courses = courses;
      } else {
        state.courses = courses.filter((val) => val.category === item.toLowerCase());
      }
    },
  },
});

export const { setNav,getCourses } = lms.actions;

export default lms.reducer;
