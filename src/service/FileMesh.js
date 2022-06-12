import { sendRequest, uploadFile } from "./engine";

const FileMesh = {
  Root: async () => await sendRequest(""),
  Insert: async (body) => await sendRequest("Insert", body),
  Search: async (term) => await sendRequest("Search?term=" + term),
  Download: async (body) => await sendRequest("Download", body),
  Split: async (body) => await sendRequest("Split", body),
  File: async (id, seq, size = "100") =>
    await sendRequest("File?id=" + id + "&seq=" + seq + "&size=" + size),
  List: async () => await sendRequest("List"),
  Add: async (body) => uploadFile(body),
};

export default FileMesh;
