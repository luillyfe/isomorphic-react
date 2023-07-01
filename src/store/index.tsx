type DataSource = {
  pageNumber: number;
};

global.memory = { pageNumber: 1 };

function saveToDatasource(data: number): void {
  global.memory.pageNumber = data;
}

function getFromDatasource(): DataSource {
  return global.memory;
}
