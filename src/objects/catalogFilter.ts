import IFilter from "./filter";

export default interface IFilterCatalog {
    filters : IFilter[];
    dispatch ?: any;
}