import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = {
    totalTests: 24,
    completedTests: 18,
    averageScore: 87,
    streak: 12,
  };

  const upcomingTests = [
    { id: 1, subject: 'Математика', date: '15 декабря', progress: 75, topics: 8 },
    { id: 2, subject: 'Русский язык', date: '20 декабря', progress: 60, topics: 12 },
    { id: 3, subject: 'История', date: '25 декабря', progress: 45, topics: 15 },
  ];

  const studyTopics = [
    { id: 1, name: 'Тригонометрия', progress: 85, completed: 17, total: 20, difficulty: 'Сложно' },
    { id: 2, name: 'Синтаксис', progress: 70, completed: 14, total: 20, difficulty: 'Средне' },
    { id: 3, name: 'Вторая мировая война', progress: 55, completed: 11, total: 20, difficulty: 'Легко' },
  ];

  const recentTests = [
    { id: 1, subject: 'Алгебра: Квадратные уравнения', score: 92, date: '3 дек', errors: 2 },
    { id: 2, subject: 'Грамматика: Причастия', score: 88, date: '2 дек', errors: 3 },
    { id: 3, subject: 'История: СССР 1945-1991', score: 85, date: '1 дек', errors: 4 },
  ];

  const achievements = [
    { id: 1, name: 'Первые 10 тестов', icon: 'Award', unlocked: true },
    { id: 2, name: 'Неделя без ошибок', icon: 'Target', unlocked: true },
    { id: 3, name: 'Мастер математики', icon: 'Trophy', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SmartExam
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <Icon name="Flame" size={14} className="text-orange-500" />
                {stats.streak} дней
              </Badge>
              <Avatar>
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                  АП
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8 bg-white/80 backdrop-blur-md p-1 h-auto">
            <TabsTrigger value="dashboard" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="LayoutDashboard" size={18} />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="study" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="BookOpen" size={18} />
              <span className="hidden sm:inline">Подготовка</span>
            </TabsTrigger>
            <TabsTrigger value="tests" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="FileText" size={18} />
              <span className="hidden sm:inline">Тесты</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="BarChart3" size={18} />
              <span className="hidden sm:inline">Аналитика</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="User" size={18} />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Привет, Александр! 👋
              </h1>
              <p className="text-lg text-muted-foreground">
                Готов продолжить подготовку к экзаменам?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 text-white hover:scale-105 transition-transform">
                <CardHeader className="pb-2">
                  <CardDescription className="text-purple-100">Пройдено тестов</CardDescription>
                  <CardTitle className="text-4xl">{stats.completedTests}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-purple-100">
                    <Icon name="TrendingUp" size={16} />
                    <span>из {stats.totalTests}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500 to-pink-600 border-0 text-white hover:scale-105 transition-transform">
                <CardHeader className="pb-2">
                  <CardDescription className="text-pink-100">Средний балл</CardDescription>
                  <CardTitle className="text-4xl">{stats.averageScore}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-pink-100">
                    <Icon name="Target" size={16} />
                    <span>Отличный результат!</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white hover:scale-105 transition-transform">
                <CardHeader className="pb-2">
                  <CardDescription className="text-blue-100">Дней подряд</CardDescription>
                  <CardTitle className="text-4xl">{stats.streak}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Icon name="Flame" size={16} />
                    <span>Продолжай в том же духе!</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-white hover:scale-105 transition-transform">
                <CardHeader className="pb-2">
                  <CardDescription className="text-orange-100">До экзамена</CardDescription>
                  <CardTitle className="text-4xl">10д</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-orange-100">
                    <Icon name="Calendar" size={16} />
                    <span>Успеешь подготовиться</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-purple-600" />
                    Предстоящие экзамены
                  </CardTitle>
                  <CardDescription>Следи за прогрессом подготовки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingTests.map((test) => (
                    <div key={test.id} className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-lg">{test.subject}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {test.date} • {test.topics} тем
                          </p>
                        </div>
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                          {test.progress}%
                        </Badge>
                      </div>
                      <Progress value={test.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-blue-600" />
                    Последние результаты
                  </CardTitle>
                  <CardDescription>Твои недавние тесты</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentTests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold">{test.subject}</h4>
                        <p className="text-sm text-muted-foreground">{test.date} • {test.errors} ошибок</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {test.score}
                        </div>
                        <div className="text-xs text-muted-foreground">баллов</div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
                    Посмотреть все результаты
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="study" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Твоя подготовка
              </h2>
              <p className="text-muted-foreground">AI подобрал материалы специально для тебя</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {studyTopics.map((topic) => (
                <Card key={topic.id} className="bg-white/80 backdrop-blur-md border-purple-100 hover:shadow-xl hover:scale-105 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{topic.name}</CardTitle>
                        <Badge variant="outline" className={
                          topic.difficulty === 'Сложно' ? 'border-red-400 text-red-600' :
                          topic.difficulty === 'Средне' ? 'border-orange-400 text-orange-600' :
                          'border-green-400 text-green-600'
                        }>
                          {topic.difficulty}
                        </Badge>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                        {topic.progress}%
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={topic.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{topic.completed} из {topic.total} упражнений</span>
                      <Icon name="CheckCircle2" size={16} className="text-green-500" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 gap-2">
                      <Icon name="Play" size={16} />
                      Продолжить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-purple-600" />
                  AI рекомендует
                </CardTitle>
                <CardDescription>На основе твоих ошибок и прогресса</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-orange-500" />
                      Обрати внимание
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      У тебя сложности с темой "Логарифмы". Рекомендуем пройти дополнительные упражнения.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Award" size={18} className="text-green-500" />
                      Отличный прогресс
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Ты отлично справляешься с синтаксисом! Продолжай в том же духе.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Тестирование
              </h2>
              <p className="text-muted-foreground">Проверь свои знания с AI-генерацией вопросов</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-purple-500 border-0 text-white hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Zap" size={24} />
                    Быстрый тест
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    10 вопросов • 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue-50">
                    AI подберет вопросы по темам, которые ты изучаешь прямо сейчас.
                  </p>
                  <Button className="w-full bg-white text-purple-600 hover:bg-blue-50 gap-2">
                    <Icon name="Play" size={16} />
                    Начать тест
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500 to-orange-500 border-0 text-white hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Target" size={24} />
                    Полный экзамен
                  </CardTitle>
                  <CardDescription className="text-pink-100">
                    30 вопросов • 60 минут
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-pink-50">
                    Симуляция реального экзамена с детальной аналитикой результатов.
                  </p>
                  <Button className="w-full bg-white text-pink-600 hover:bg-pink-50 gap-2">
                    <Icon name="FileText" size={16} />
                    Начать экзамен
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-purple-600" />
                  Доступные темы для тестирования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Алгебра', 'Геометрия', 'Тригонометрия', 'Грамматика', 'Орфография', 'Синтаксис', 'Древний мир', 'Средневековье', 'Новое время'].map((topic) => (
                    <Button key={topic} variant="outline" className="justify-start gap-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300">
                      <Icon name="CheckCircle2" size={16} />
                      {topic}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Аналитика прогресса
              </h2>
              <p className="text-muted-foreground">Детальный анализ твоих результатов</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-md border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">Сильные стороны</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Тригонометрия</span>
                    <Badge className="bg-green-500 text-white">95%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Синтаксис</span>
                    <Badge className="bg-green-500 text-white">92%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Новейшая история</span>
                    <Badge className="bg-green-500 text-white">89%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-600">Требуют внимания</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Логарифмы</span>
                    <Badge className="bg-orange-500 text-white">68%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Причастия</span>
                    <Badge className="bg-orange-500 text-white">72%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Средневековье</span>
                    <Badge className="bg-orange-500 text-white">65%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600">Статистика за неделю</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Тестов пройдено</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Времени потрачено</span>
                    <span className="font-bold">8ч 45м</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Средний балл</span>
                    <span className="font-bold">87%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-md border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-purple-600" />
                  Динамика результатов
                </CardTitle>
                <CardDescription>Твой прогресс за последний месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 70, 68, 75, 78, 82, 85, 87].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg hover:from-purple-600 hover:to-pink-600 transition-colors" style={{ height: `${height}%` }} />
                      <span className="text-xs text-muted-foreground">
                        {idx + 1} нед
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-blue-100 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Brain" className="text-purple-600" />
                  AI-анализ твоих ошибок
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={18} className="text-red-500" />
                    Частые ошибки
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Путаешь свойства логарифмов в 60% задач</li>
                    <li>• Ошибки в постановке запятых с причастными оборотами</li>
                    <li>• Неточности в датах событий Второй мировой войны</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={18} className="text-yellow-500" />
                    Рекомендации
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Повтори основные формулы логарифмов</li>
                    <li>• Пройди тренажер по пунктуации</li>
                    <li>• Составь хронологическую таблицу событий</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-200">
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl">
                  АП
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold mb-2">Александр Петров</h2>
              <p className="text-muted-foreground">11 класс • Готовлюсь к ЕГЭ 2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-purple-600" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`p-4 rounded-lg flex items-center gap-3 ${achievement.unlocked ? 'bg-gradient-to-r from-purple-50 to-pink-50' : 'bg-gray-100 opacity-60'}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.unlocked ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        <Icon name={achievement.icon as any} size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.unlocked ? 'Разблокировано' : 'Заблокировано'}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" className="text-purple-600" />
                    Настройки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Bell" size={18} />
                    Уведомления
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Calendar" size={18} />
                    Расписание занятий
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Target" size={18} />
                    Цели подготовки
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Palette" size={18} />
                    Тема оформления
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-0 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Crown" size={24} />
                  Premium подписка
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Получи доступ ко всем возможностям
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} />
                    Неограниченная генерация тестов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} />
                    Детальная аналитика ошибок
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} />
                    Персональный AI-репетитор
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} />
                    Без рекламы
                  </li>
                </ul>
                <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold">
                  Получить Premium
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
