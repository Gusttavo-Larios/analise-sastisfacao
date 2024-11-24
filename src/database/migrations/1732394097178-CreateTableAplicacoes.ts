import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTableAplicacoes1732394097178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "aplicacoes",
        columns: [
          new TableColumn({
            name: "id",
            type: "serial",
            generationStrategy: "increment",
            isPrimary: true,
          }),
          new TableColumn({
            name: "data_inicio",
            type: "date",
            isNullable: true,
          }),
          new TableColumn({
            name: "data_fim",
            type: "date",
            isNullable: true,
          }),
          new TableColumn({
            name: "situacao",
            type: "smallint",
          }),
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("aplicacoes", true, true);
  }
}
