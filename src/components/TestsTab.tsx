import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TestsTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default TestsTab;
