import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateTableUsuarios1731765595706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'integer',
            generationStrategy: 'increment',
            isPrimary: true,
          }),
          new TableColumn({
            name: 'turma_id',
            type: 'integer',
            isNullable: true,
          }),
          new TableColumn({
            name: 'nome',
            type: 'varchar',
            length: '100',
          }),
          new TableColumn({
            name: 'email',
            type: 'varchar',
            length: '100',
          }),
          new TableColumn({
            name: 'senha',
            type: 'varchar',
            length: '100',
          }),
          new TableColumn({
            name: 'tipo_usuario',
            type: 'smallserial',
          }),
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'usuarios',
      new TableForeignKey({
        columnNames: ['turma_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'turmas',
        name: 'fk_usuarios_turma',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }
}