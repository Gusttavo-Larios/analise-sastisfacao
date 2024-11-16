import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTableUsuarios1731765595706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "USUARIOS",
        columns: [
          new TableColumn({
            name: "ID",
            type: "integer",
            generationStrategy: "increment",
            isPrimary: true,
          }),
          new TableColumn({
            name: "TURMA_ID",
            type: "integer",
            isNullable: true,
          }),
          new TableColumn({
            name: "NOME",
            type: "varchar",
            length: "100",
          }),
          new TableColumn({
            name: "EMAIL",
            type: "varchar",
            length: "100",
          }),
          new TableColumn({
            name: "SENHA",
            type: "varchar",
            length: "100",
          }),
          new TableColumn({
            name: "SALT_SENHA",
            type: "varchar",
            length: "100",
          }),
          new TableColumn({
            name: "TIPO_USUARIO",
            type: "smallserial",
          }),
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "USUARIOS",
      new TableForeignKey({
        columnNames: ["TURMA_ID"],
        referencedColumnNames: ["ID"],
        referencedTableName: "TURMAS",
        name: "FK_USUARIOS_TURMA",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("USUARIOS", "FK_USUARIOS_TURMA");
    await queryRunner.dropTable("USUARIOS");
  }
}
