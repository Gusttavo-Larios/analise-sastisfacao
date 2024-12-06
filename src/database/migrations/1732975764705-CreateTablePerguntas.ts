import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateTablePerguntas1732975764705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "perguntas",
        columns: [
          new TableColumn({
            name: "id",
            type: "serial",
            generationStrategy: "increment",
            isPrimary: true,
          }),
          new TableColumn({
            name: "texto",
            type: "varchar",
            length: "500",
          }),
          new TableColumn({
            name: "tipo_pergunta",
            type: "smallint",
          }),
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("perguntas", true);
  }
}
