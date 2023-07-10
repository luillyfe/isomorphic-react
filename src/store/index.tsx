type DataSource = {
  pageNumber: number;
};

declare global {
  var memory: DataSource;
}
global.memory = { pageNumber: 1 };

export function saveToDatasource(data: number): void {
  global.memory.pageNumber = data;
}

export function getFromDatasource(): DataSource {
  return global.memory;
}
