import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateTableTurmas1731765058494 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "turmas",
        columns: [
          new TableColumn({
            name: "id",
            type: "serial",
            generationStrategy: "increment",
            isPrimary: true,
          }),
          new TableColumn({
            name: "nome",
            type: "varchar",
            length: "100",
          }),
          new TableColumn({
            name: "ano",
            type: "smallint",
            isGenerated: false,
          }),
          new TableColumn({
            name: "tipo_curso",
            type: "smallint",
            isGenerated: false,
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("turmas");
  }
}
