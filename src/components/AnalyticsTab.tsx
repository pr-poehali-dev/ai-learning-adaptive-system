import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AnalyticsTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default AnalyticsTab;
