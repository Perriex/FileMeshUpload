const Local = "http://127.0.0.1:8080/";

const headers = () => ({
  "content-Type": "application/json; charset=utf-8",
});

export const sendRequest = async (url, body) => {
  let res;
  if (body !== undefined) {
    res = await fetch(Local + url, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });
  } else {
    res = await fetch(Local + url, { headers: headers() });
  }
  if (res.status < 400) {
    try {
      const text = await res.text();
      const json = JSON.parse(text);
      return json;
    } catch (err) {
      return true;
    }
  }
  const error = await res.json();
  throw error;
};

export const uploadFile = async (file) => {
  const form = new FormData();
  form.append("file", file);
  const init = {
    method: "POST",
    body: form,
  };
  console.log("🚀 ~ file: engine.js ~ line 39 ~ uploadFile ~ init", init);
  const res = await fetch(Local + "Upload", init);
  try {
    const json = await res.json();
    if (res.status < 400) return json;
    throw json;
  } catch {
    return null;
  }
};
