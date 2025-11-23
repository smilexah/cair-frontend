export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    ru: string;
    kz: string;
  };
  shortDescription: {
    en: string;
    ru: string;
    kz: string;
  };
  fullDescription: {
    en: string;
    ru: string;
    kz: string;
  };
  image: string;
  tags: string[];
  status: 'active' | 'completed' | 'upcoming';
  startDate: string;
  endDate?: string;
  team: string[];
  objectives: {
    en: string[];
    ru: string[];
    kz: string[];
  };
  results?: {
    en: string[];
    ru: string[];
    kz: string[];
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'kzh',
    title: {
      en: 'KZH - Kazakh Language AI Assistant',
      ru: 'KZH - Казахский языковой AI ассистент',
      kz: 'KZH - Қазақ тілі AI ассистенті'
    },
    shortDescription: {
      en: 'Advanced AI assistant for Kazakh language processing and generation',
      ru: 'Продвинутый AI ассистент для обработки и генерации казахского языка',
      kz: 'Қазақ тілін өңдеу және генерациялау үшін кешенді AI көмекшісі'
    },
    fullDescription: {
      en: 'KZH is a cutting-edge AI assistant specifically designed for the Kazakh language. It leverages state-of-the-art natural language processing techniques to understand, process, and generate Kazakh text. The project aims to bridge the gap in AI language support for Kazakh speakers and promote the use of Kazakh in digital spaces.',
      ru: 'KZH - это передовой AI ассистент, специально разработанный для казахского языка. Он использует современные методы обработки естественного языка для понимания, обработки и генерации казахского текста. Проект направлен на устранение пробела в поддержке AI для казахского языка и продвижение использования казахского языка в цифровом пространстве.',
      kz: 'KZH - қазақ тіліне арнап жасалған заманауи AI көмекшісі. Ол қазақ тілін түсіну, өңдеу және генерациялау үшін заманауи табиғи тілді өңдеу әдістерін пайдаланады. Жоба қазақ тіліндегі AI қолдауындағы олқылықты жоюға және цифрлық кеңістікте қазақ тілін қолдануды дамытуға бағытталған.'
    },
    image: '/projects/KZH.svg',
    tags: ['NLP', 'Machine Learning', 'Kazakh Language', 'AI'],
    status: 'active',
    startDate: '2024-01-01',
    team: ['Dr. Aibek Alanov', 'Meiirzhan Shaken', 'Research Team'],
    objectives: {
      en: [
        'Develop a comprehensive NLP model for Kazakh language',
        'Create tools for Kazakh text generation and understanding',
        'Build a dataset of Kazakh language resources',
        'Provide API access for developers'
      ],
      ru: [
        'Разработать комплексную NLP модель для казахского языка',
        'Создать инструменты для генерации и понимания казахского текста',
        'Построить датасет ресурсов казахского языка',
        'Предоставить API доступ для разработчиков'
      ],
      kz: [
        'Қазақ тіліне арналған кешенді NLP моделін жасау',
        'Қазақ мәтінін генерациялау және түсіну құралдарын жасау',
        'Қазақ тілі ресурстарының деректер жинағын құру',
        'Әзірлеушілерге API қолжетімділігін қамтамасыз ету'
      ]
    },
    results: {
      en: [
        'Developed initial model with 85% accuracy',
        'Created public API with 1000+ active users',
        'Published research papers in leading conferences'
      ],
      ru: [
        'Разработана начальная модель с точностью 85%',
        'Создан публичный API с 1000+ активными пользователями',
        'Опубликованы исследовательские статьи на ведущих конференциях'
      ],
      kz: [
        '85% дәлдікпен бастапқы модель жасалды',
        '1000+ белсенді пайдаланушысы бар ашық API жасалды',
        'Жетекші конференцияларда зерттеу мақалалары жарияланды'
      ]
    }
  },
  {
    id: '2',
    slug: 'neural-translation',
    title: {
      en: 'Neural Machine Translation',
      ru: 'Нейронный машинный перевод',
      kz: 'Нейрондық машиналық аударма'
    },
    shortDescription: {
      en: 'Advanced translation system for Kazakh-Russian-English languages',
      ru: 'Продвинутая система перевода для казахского-русского-английского языков',
      kz: 'Қазақ-орыс-ағылшын тілдеріне арналған озық аударма жүйесі'
    },
    fullDescription: {
      en: 'Neural Machine Translation project develops state-of-the-art translation models specifically trained for Kazakh language pairs. The system uses transformer-based architectures to achieve high-quality translations between Kazakh, Russian, and English.',
      ru: 'Проект нейронного машинного перевода разрабатывает современные модели перевода, специально обученные для казахских языковых пар. Система использует архитектуры на основе трансформеров для достижения высококачественных переводов между казахским, русским и английским языками.',
      kz: 'Нейрондық машиналық аударма жобасы қазақ тілі жұптарына арнайы үйретілген заманауи аударма модельдерін әзірлейді. Жүйе қазақ, орыс және ағылшын тілдері арасында жоғары сапалы аудармаларға қол жеткізу үшін трансформер негізіндегі архитектураларды пайдаланады.'
    },
    image: '/projects/KZH.svg',
    tags: ['Translation', 'NLP', 'Transformers', 'Deep Learning'],
    status: 'active',
    startDate: '2023-06-01',
    team: ['Dr. Aigerim Suleimenova', 'Assel Kuanysheva', 'Research Team'],
    objectives: {
      en: [
        'Build high-quality translation models for Kazakh',
        'Create parallel corpus for training',
        'Optimize translation speed and accuracy',
        'Deploy as web service'
      ],
      ru: [
        'Создать высококачественные модели перевода для казахского языка',
        'Создать параллельный корпус для обучения',
        'Оптимизировать скорость и точность перевода',
        'Развернуть как веб-сервис'
      ],
      kz: [
        'Қазақ тіліне арналған жоғары сапалы аударма модельдерін жасау',
        'Үйрету үшін параллель корпус жасау',
        'Аударма жылдамдығы мен дәлдігін оңтайландыру',
        'Веб-қызмет ретінде орналастыру'
      ]
    }
  },
  {
    id: '3',
    slug: 'speech-recognition',
    title: {
      en: 'Kazakh Speech Recognition',
      ru: 'Распознавание казахской речи',
      kz: 'Қазақ сөйлеуін тану'
    },
    shortDescription: {
      en: 'Voice-to-text system for Kazakh language with high accuracy',
      ru: 'Система распознавания речи для казахского языка с высокой точностью',
      kz: 'Жоғары дәлдікпен қазақ тіліне арналған дауысты мәтінге айналдыру жүйесі'
    },
    fullDescription: {
      en: 'Developing an advanced automatic speech recognition system specifically designed for the Kazakh language. The system handles various dialects and accents, making voice technology accessible to all Kazakh speakers.',
      ru: 'Разработка передовой системы автоматического распознавания речи, специально разработанной для казахского языка. Система обрабатывает различные диалекты и акценты, делая голосовые технологии доступными для всех говорящих на казахском языке.',
      kz: 'Қазақ тіліне арнайы жасалған озық автоматты сөйлеуді тану жүйесін әзірлеу. Жүйе әртүрлі диалектілер мен акценттерді өңдейді, дауыстық технологияны барлық қазақ тілінде сөйлейтіндерге қолжетімді етеді.'
    },
    image: '/projects/KZH.svg',
    tags: ['Speech Recognition', 'Audio Processing', 'AI', 'Acoustic Models'],
    status: 'active',
    startDate: '2024-03-15',
    team: ['Dias Nurakhmet', 'Nurlan Bekzhanov'],
    objectives: {
      en: [
        'Collect diverse speech data from Kazakh speakers',
        'Train acoustic and language models',
        'Achieve 90%+ word accuracy rate',
        'Support real-time transcription'
      ],
      ru: [
        'Собрать разнообразные речевые данные от говорящих на казахском языке',
        'Обучить акустические и языковые модели',
        'Достичь точности распознавания слов 90%+',
        'Поддержка транскрипции в реальном времени'
      ],
      kz: [
        'Қазақ тілінде сөйлейтіндерден әртүрлі сөйлеу деректерін жинау',
        'Акустикалық және тілдік модельдерді үйрету',
        'Сөздерді тану дәлдігінің 90%+ деңгейіне жету',
        'Нақты уақыттағы транскрипцияны қолдау'
      ]
    }
  },
  {
    id: '4',
    slug: 'sentiment-analysis',
    title: {
      en: 'Kazakh Sentiment Analysis',
      ru: 'Анализ тональности казахского текста',
      kz: 'Қазақ мәтінінің тональдық талдауы'
    },
    shortDescription: {
      en: 'AI-powered sentiment and emotion detection for Kazakh text',
      ru: 'ИИ-анализ тональности и эмоций для казахского текста',
      kz: 'Қазақ мәтініне арналған AI негізіндегі сезім және эмоция анықтау'
    },
    fullDescription: {
      en: 'Sentiment Analysis project creates tools to understand emotions and opinions in Kazakh text. This technology helps analyze social media, customer feedback, and public opinion in the Kazakh digital space.',
      ru: 'Проект анализа тональности создает инструменты для понимания эмоций и мнений в казахском тексте. Эта технология помогает анализировать социальные сети, отзывы клиентов и общественное мнение в казахском цифровом пространстве.',
      kz: 'Тональдық талдау жобасы қазақ мәтініндегі эмоциялар мен пікірлерді түсінуге арналған құралдар жасайды. Бұл технология қазақ цифрлық кеңістігінде әлеуметтік желілерді, тұтынушылардың пікірлерін және қоғамдық пікірді талдауға көмектеседі.'
    },
    image: '/projects/KZH.svg',
    tags: ['NLP', 'Sentiment Analysis', 'Text Mining', 'Social Media'],
    status: 'upcoming',
    startDate: '2025-01-01',
    team: ['Assel Kuanysheva', 'Meiirzhan Shaken'],
    objectives: {
      en: [
        'Build sentiment classification models',
        'Create annotated dataset for training',
        'Support multi-class emotion detection',
        'Develop API for integration'
      ],
      ru: [
        'Создать модели классификации тональности',
        'Создать аннотированный датасет для обучения',
        'Поддержка многоклассового определения эмоций',
        'Разработать API для интеграции'
      ],
      kz: [
        'Тональдықты жіктеу модельдерін жасау',
        'Үйрету үшін аннотацияланған деректер жиынын жасау',
        'Көп класты эмоцияларды анықтауды қолдау',
        'Интеграция үшін API әзірлеу'
      ]
    }
  }
];

