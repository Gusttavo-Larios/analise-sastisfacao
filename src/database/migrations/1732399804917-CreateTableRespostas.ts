import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTableRespostas1732399804917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "respostas",
        columns: [
          new TableColumn({
            name: "id",
            type: "serial",
            generationStrategy: "increment",
            isPrimary: true,
          }),
          new TableColumn({
            name: "usuario_id",
            type: "integer",
            isNullable: true,
          }),
          new TableColumn({
            name: "aplicacao_id",
            type: "integer",
            isNullable: true,
          }),
          new TableColumn({
            name: "pergunta_id",
            type: "integer",
            isNullable: true,
          }),
          new TableColumn({
            name: "expectativa",
            type: "smallint",
          }),
          new TableColumn({
            name: "realidade",
            type: "smallint",
          }),
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "respostas",
      new TableForeignKey({
        columnNames: ["aplicacao_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "aplicacoes",
        name: "fk_respostas_aplicacao",
      })
    );

    await queryRunner.createForeignKey(
      "respostas",
      new TableForeignKey({
        columnNames: ["usuario_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "usuarios",
        name: "fk_respostas_usuario",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("respostas", true, true);
  }
}
