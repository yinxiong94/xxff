// 第一个获取input文件流
export function uploading1(input) {
  let file = input;
  let fileName = file.name.split(".");
  const extension = fileName[fileName.length - 1] === "apk";
  const extension2 = fileName[fileName.length - 1] === "ipa";
  const isLt2M = file.size / 1024 / 1024 <= 100;
  if (!extension && !extension2) {
    this.$message({
      message: "上传应用只能是apk、ipa格式!",
      type: "warning"
    });
    return false
  }

  if (!isLt2M) {
    this.$message({
      message: "上传应用大小不能超过 100MB!",
      type: "warning"
    });
  }
  return false
}

export default {
  uploading1
};
