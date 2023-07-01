type DataSource = {
  pageNumber: number;
};

global.memory = { pageNumber: 1 };

export function saveToDatasource(data: number): void {
  global.memory.pageNumber = data;
}

export function getFromDatasource(): DataSource {
  return global.memory;
}
