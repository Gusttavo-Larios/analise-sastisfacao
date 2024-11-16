import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateTableTurmas1731765058494 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "TURMAS",
        columns: [
          new TableColumn({
            name: "ID",
            type: "integer",
            generationStrategy: "increment",
            isPrimary: true,
          }),
          new TableColumn({
            name: "NOME",
            type: "varchar",
            length: "100",
          }),
          new TableColumn({
            name: "ANO",
            type: "smallserial",
          }),
          new TableColumn({
            name: "TIPO_CURSO",
            type: "smallserial",
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("TURMAS");
  }
}
