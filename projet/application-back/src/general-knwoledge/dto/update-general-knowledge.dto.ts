export class UpdateGeneralKnowledgeDto {
    id: number;

    formQuestion: string | null | undefined;
    reponseA: {
        reponse: string | null | undefined;
        correct: boolean ;
    };
    reponseB: {
        reponse: string | null | undefined;
        correct: boolean ;
    };
    reponseC: {
        reponse: string | null | undefined;
        correct: boolean ;
    };
    reponseD: {
        reponse: string | null | undefined;
        correct: boolean ;
    };
}
