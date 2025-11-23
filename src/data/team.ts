export interface TeamMember {
  id: string;
  name: string;
  role: {
    en: string;
    ru: string;
    kz: string;
  };
  bio: {
    en: string;
    ru: string;
    kz: string;
  };
  image?: string;
  expertise: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  scholar?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Aibek Alanov',
    role: {
      en: 'Research Director & Principal Investigator',
      ru: 'Директор по исследованиям и главный научный сотрудник',
      kz: 'Зерттеу директоры және бас ғылыми қызметкер'
    },
    bio: {
      en: 'Leading expert in AI and machine learning with over 10 years of experience. Focused on developing AI solutions for Kazakh language and culture.',
      ru: 'Ведущий эксперт в области ИИ и машинного обучения с более чем 10-летним опытом. Занимается разработкой AI решений для казахского языка и культуры.',
      kz: '10 жылдан астам тәжірибесі бар AI және машиналық оқытудың жетекші сарапшысы. Қазақ тілі мен мәдениетіне арналған AI шешімдерін әзірлеуге бағытталған.'
    },
    expertise: ['Machine Learning', 'NLP', 'Deep Learning', 'AI Research'],
    email: 'aibek@cair.kz'
  },
  {
    id: '2',
    name: 'Meiirzhan Shaken',
    role: {
      en: 'Senior ML Engineer',
      ru: 'Старший ML инженер',
      kz: 'Аға ML инженері'
    },
    bio: {
      en: 'Experienced ML engineer specializing in natural language processing and model optimization. Contributing to core AI infrastructure.',
      ru: 'Опытный ML инженер, специализирующийся на обработке естественного языка и оптимизации моделей. Участвует в разработке базовой AI инфраструктуры.',
      kz: 'Табиғи тілді өңдеу және модельді оңтайландыру саласында мамандандырылған тәжірибелі ML инженері. Негізгі AI инфрақұрылымын әзірлеуге қатысады.'
    },
    expertise: ['PyTorch', 'TensorFlow', 'NLP', 'Model Deployment'],
    email: 'meiirzhan@cair.kz'
  },
  {
    id: '3',
    name: 'Dr. Aigerim Suleimenova',
    role: {
      en: 'Computational Linguist',
      ru: 'Компьютерный лингвист',
      kz: 'Компьютерлік лингвист'
    },
    bio: {
      en: 'Expert in Kazakh linguistics and computational methods. Focuses on developing linguistic resources and tools for the Kazakh language.',
      ru: 'Эксперт в казахской лингвистике и вычислительных методах. Специализируется на разработке лингвистических ресурсов и инструментов для казахского языка.',
      kz: 'Қазақ лингвистикасы және есептеу әдістерінің сарапшысы. Қазақ тіліне арналған лингвистикалық ресурстар мен құралдарды әзірлеуге бағытталған.'
    },
    expertise: ['Linguistics', 'Corpus Analysis', 'Language Modeling', 'Kazakh Phonetics'],
    email: 'aigerim@cair.kz'
  },
  {
    id: '4',
    name: 'Dias Nurakhmet',
    role: {
      en: 'Research Engineer',
      ru: 'Инженер-исследователь',
      kz: 'Зерттеу инженері'
    },
    bio: {
      en: 'Research engineer working on data collection, annotation, and preprocessing pipelines for Kazakh language datasets.',
      ru: 'Инженер-исследователь, работающий над сбором данных, аннотацией и конвейерами предварительной обработки для датасетов казахского языка.',
      kz: 'Қазақ тілі деректер жинақтарына арналған деректерді жинау, аннотациялау және алдын-ала өңдеу желілерімен айналысатын зерттеу инженері.'
    },
    expertise: ['Data Engineering', 'Python', 'Data Annotation', 'ETL Pipelines'],
    email: 'dias@cair.kz'
  },
  {
    id: '5',
    name: 'Assel Kuanysheva',
    role: {
      en: 'ML Researcher',
      ru: 'ML исследователь',
      kz: 'ML зерттеушісі'
    },
    bio: {
      en: 'Machine learning researcher focusing on multimodal AI and transfer learning for low-resource languages.',
      ru: 'Исследователь машинного обучения, специализирующийся на мультимодальном ИИ и трансферном обучении для языков с низкими ресурсами.',
      kz: 'Төмен ресурсты тілдерге арналған мультимодальды AI және трансферлік оқытуға бағытталған машиналық оқыту зерттеушісі.'
    },
    expertise: ['Transfer Learning', 'Computer Vision', 'Multimodal AI', 'Research'],
    email: 'assel@cair.kz'
  },
  {
    id: '6',
    name: 'Nurlan Bekzhanov',
    role: {
      en: 'Software Engineer',
      ru: 'Программный инженер',
      kz: 'Бағдарламалық инженері'
    },
    bio: {
      en: 'Full-stack developer building web applications and APIs for AI model deployment and accessibility.',
      ru: 'Full-stack разработчик, создающий веб-приложения и API для развертывания и доступности AI моделей.',
      kz: 'AI модельдерін орналастыру және қолжетімділік үшін веб-қосымшалар мен API жасайтын full-stack әзірлеуші.'
    },
    expertise: ['React', 'Node.js', 'FastAPI', 'Docker', 'Kubernetes'],
    email: 'nurlan@cair.kz'
  }
];

