export const joinData = array => {
  const labels = array[0].data[0];
  const arrayWithoutLabels = array.map(
    item => item.data.slice(0)
  );
  return [labels, ...arrayWithoutLabels.flat()];
};