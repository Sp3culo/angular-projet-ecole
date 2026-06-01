export class CreateGeneralKnowledgeDto {
    question: string | null | undefined;
    answers : [
        answerA: {
            label: string | null | undefined;
            correct: boolean ;
        },
        answerB: {
            label: string | null | undefined;
            correct: boolean ;
        },
        answerC: {
            label: string | null | undefined;
            correct: boolean ;
        },
        answerD: {
            label: string | null | undefined;
            correct: boolean ;
        }
    ]
}