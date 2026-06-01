import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneralKnowledgeAndUserTable1706106536884 implements MigrationInterface {
    name = 'GeneralKnowledgeAndUserTable1706106536884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`general_question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label\` varchar(255) NOT NULL, \`created\` varchar(255) NOT NULL, \`updated\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`general_response\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label\` varchar(255) NOT NULL, \`correct\` tinyint NOT NULL, \`created\` varchar(255) NOT NULL, \`updated\` varchar(255) NOT NULL, \`questionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`birthdate\` datetime NOT NULL, \`created\` varchar(255) NOT NULL, \`updated\` varchar(255) NOT NULL, \`score\` int NOT NULL DEFAULT '0', \`admin\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`utilisateur_culture_reponses\` (\`id_utilisateur\` int NOT NULL, \`id_reponse\` int NOT NULL, INDEX \`IDX_a7f66135d9dfc5cb1519d73125\` (\`id_utilisateur\`), INDEX \`IDX_db599094629f10bba17c81d45d\` (\`id_reponse\`), PRIMARY KEY (\`id_utilisateur\`, \`id_reponse\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD CONSTRAINT \`FK_ee808113762d342d5fabb6aa147\` FOREIGN KEY (\`questionId\`) REFERENCES \`general_question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` ADD CONSTRAINT \`FK_a7f66135d9dfc5cb1519d731258\` FOREIGN KEY (\`id_utilisateur\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` ADD CONSTRAINT \`FK_db599094629f10bba17c81d45db\` FOREIGN KEY (\`id_reponse\`) REFERENCES \`general_response\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` DROP FOREIGN KEY \`FK_db599094629f10bba17c81d45db\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` DROP FOREIGN KEY \`FK_a7f66135d9dfc5cb1519d731258\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP FOREIGN KEY \`FK_ee808113762d342d5fabb6aa147\``);
        await queryRunner.query(`DROP INDEX \`IDX_db599094629f10bba17c81d45d\` ON \`utilisateur_culture_reponses\``);
        await queryRunner.query(`DROP INDEX \`IDX_a7f66135d9dfc5cb1519d73125\` ON \`utilisateur_culture_reponses\``);
        await queryRunner.query(`DROP TABLE \`utilisateur_culture_reponses\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`general_response\``);
        await queryRunner.query(`DROP TABLE \`general_question\``);
    }

}
