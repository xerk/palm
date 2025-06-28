import { Injectable } from '@nestjs/common';
import { CheckinDto } from './dto/checkin.dto';


interface MockResponse {
  energy: {
    low: string[];
    medium: string[];
    high: string[];
  };
  mood: {
    meh: string[];
    frown: string[];
    smile: string[];
  };
}

const mockResponse: MockResponse = {
  energy: {
    low: [
      'Try to go for a walk',
      'Drink Water',
    ],
    medium: [
      'Try to go for a bike ride',
      'Take a short break from screens',
      'Drink Water',
    ],
    high: [
      'Listen to music to motivate you',
      'Eat a healthy food',
      'Good Energy forr workout',
    ],
  },
  mood: {
    meh: [
      'Call a friend',
      'Try to walk or do yoga'
    ],
    frown: [
      'Try new things',
      'Set todo list and achiement you want to do',
      'Go out and breath natural air',
    ],
    smile: [
      'Help someone today',
      'Finish a task you have been putting off',
      'Try something new',
    ],
  },
}


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkin(body: CheckinDto) {

    const list: string[] = [];

    if (body.mood === 'smile') {
      list.push(...mockResponse.mood.smile);
    } else if (body.mood === 'frown') {
      list.push(...mockResponse.mood.frown);
    } else if (body.mood === 'meh') {
      list.push(...mockResponse.mood.meh);
    }

    if (body.energy <= 3) {
      list.push(...mockResponse.energy.low);
    } else if (body.energy <= 6) {
      list.push(...mockResponse.energy.medium);
    } else {
      list.push(...mockResponse.energy.high);
    }

    return {
      message: 'Checkin successful',
      data: [...new Set(list)],
    };
  }
}
