import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('api')
export class QuizController {
  @Get('hello-quiz')
  helloQuiz(): string {
    return 'Hello Quiz';
  }

  @Post('grade-quiz')
  gradeQuiz(@Body() answers: Record<string, string>): { score: number } {
    const correctAnswers = {
      question1: 'madrid',
    };

    let score = 0;
    for (const question in answers) {
      if (
        answers.hasOwnProperty(question) &&
        answers[question].toLowerCase() === correctAnswers[question]
      ) {
        score++;
      }
    }

    return { score };
  }
}
