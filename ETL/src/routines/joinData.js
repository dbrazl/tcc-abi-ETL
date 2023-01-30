export const joinData = array => {
  const datas = array.map(
    item => item.data.slice(0)
  );
  return [...datas.flat()];
};