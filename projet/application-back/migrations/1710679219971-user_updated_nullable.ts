import { MigrationInterface, QueryRunner } from "typeorm";

export class userUpdatedNullable1710679219971 implements MigrationInterface {
    name = 'userUpdatedNullable1710679219971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP FOREIGN KEY \`FK_ee808113762d342d5fabb6aa147\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP FOREIGN KEY \`FK_a7bf4cf25c28c599e605ddb002b\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP FOREIGN KEY \`FK_7e442875df62aa1a6022d47a391\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP FOREIGN KEY \`FK_c41d750342a7279ae81b7b06469\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` DROP FOREIGN KEY \`FK_a7f66135d9dfc5cb1519d731258\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` DROP FOREIGN KEY \`FK_db599094629f10bba17c81d45db\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` DROP COLUMN \`label\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` ADD \`label\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_question\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_question\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP COLUMN \`label\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD \`label\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated\` \`updated\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP COLUMN \`label\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD \`label\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP COLUMN \`message\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD \`message\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD CONSTRAINT \`FK_ee808113762d342d5fabb6aa147\` FOREIGN KEY (\`questionId\`) REFERENCES \`general_question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD CONSTRAINT \`FK_a7bf4cf25c28c599e605ddb002b\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD CONSTRAINT \`FK_c41d750342a7279ae81b7b06469\` FOREIGN KEY (\`usersId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD CONSTRAINT \`FK_7e442875df62aa1a6022d47a391\` FOREIGN KEY (\`id_response\`) REFERENCES \`question_and_a\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` ADD CONSTRAINT \`FK_a7f66135d9dfc5cb1519d731258\` FOREIGN KEY (\`id_utilisateur\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` ADD CONSTRAINT \`FK_db599094629f10bba17c81d45db\` FOREIGN KEY (\`id_reponse\`) REFERENCES \`general_response\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` DROP FOREIGN KEY \`FK_db599094629f10bba17c81d45db\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` DROP FOREIGN KEY \`FK_a7f66135d9dfc5cb1519d731258\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP FOREIGN KEY \`FK_7e442875df62aa1a6022d47a391\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP FOREIGN KEY \`FK_c41d750342a7279ae81b7b06469\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP FOREIGN KEY \`FK_a7bf4cf25c28c599e605ddb002b\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP FOREIGN KEY \`FK_ee808113762d342d5fabb6aa147\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` DROP COLUMN \`message\``);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD \`message\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` DROP COLUMN \`label\``);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD \`label\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated\` \`updated\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_response\` DROP COLUMN \`label\``);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD \`label\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_question\` DROP COLUMN \`updated\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` ADD \`updated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_question\` DROP COLUMN \`created\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` ADD \`created\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`general_question\` DROP COLUMN \`label\``);
        await queryRunner.query(`ALTER TABLE \`general_question\` ADD \`label\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` ADD CONSTRAINT \`FK_db599094629f10bba17c81d45db\` FOREIGN KEY (\`id_reponse\`) REFERENCES \`multigame\`.\`general_response\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`utilisateur_culture_reponses\` ADD CONSTRAINT \`FK_a7f66135d9dfc5cb1519d731258\` FOREIGN KEY (\`id_utilisateur\`) REFERENCES \`multigame\`.\`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD CONSTRAINT \`FK_c41d750342a7279ae81b7b06469\` FOREIGN KEY (\`usersId\`) REFERENCES \`multigame\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`q_and_answer\` ADD CONSTRAINT \`FK_7e442875df62aa1a6022d47a391\` FOREIGN KEY (\`id_response\`) REFERENCES \`multigame\`.\`question_and_a\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`question_and_a\` ADD CONSTRAINT \`FK_a7bf4cf25c28c599e605ddb002b\` FOREIGN KEY (\`id_user\`) REFERENCES \`multigame\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`general_response\` ADD CONSTRAINT \`FK_ee808113762d342d5fabb6aa147\` FOREIGN KEY (\`questionId\`) REFERENCES \`multigame\`.\`general_question\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
