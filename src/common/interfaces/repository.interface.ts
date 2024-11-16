export interface Repository {
  save<T>(entity: T): Promise<T>;
}
