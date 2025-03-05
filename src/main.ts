import { mount } from "@stlite/browser";
import stliteLibWheel from "@stlite/browser/wheels/stlite_lib-0.1.0-py3-none-any.whl";
import streamlitWheel from "@stlite/browser/wheels/streamlit-1.41.0-cp312-none-any.whl";

mount(
  {
    entrypoint: "app.py",
    files: {
      "app.py": `import streamlit as st

name = st.text_input('Your name')
st.write('Hello,', name or 'world')`,
    },
    wheelUrls: {
      stliteLib: new URL(stliteLibWheel, import.meta.url).href,
      streamlit: new URL(streamlitWheel, import.meta.url).href,
    },
    workerType: process.env.NODE_ENV === "development" ? "module" : "classic",
  },
  document.getElementById("app") as HTMLDivElement
);
