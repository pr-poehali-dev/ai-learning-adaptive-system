import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AnalyticsTab = () => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

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
          <div className="h-80 flex items-end justify-between gap-3 px-4 relative">
            {[
              { week: 1, score: 65, tests: 2 },
              { week: 2, score: 70, tests: 3 },
              { week: 3, score: 68, tests: 2 },
              { week: 4, score: 75, tests: 4 },
              { week: 5, score: 78, tests: 3 },
              { week: 6, score: 82, tests: 4 },
              { week: 7, score: 85, tests: 3 },
              { week: 8, score: 87, tests: 5 },
            ].map((data, idx) => (
              <div 
                key={idx} 
                className="flex-1 flex flex-col items-center gap-2 relative group"
                onMouseEnter={() => setHoveredBar(idx)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div 
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-500 ease-out cursor-pointer relative"
                  style={{ 
                    height: `${data.score}%`,
                    animation: `slide-up 0.${idx + 5}s ease-out`
                  }}
                >
                  {hoveredBar === idx && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10 animate-fade-in shadow-lg">
                      <div className="font-bold text-center mb-1">{data.score}%</div>
                      <div className="text-gray-300">{data.tests} теста</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-lg drop-shadow-lg">{data.score}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {data.week} нед
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-purple-100">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <span className="text-muted-foreground">Средний балл по неделям</span>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <Icon name="TrendingUp" size={16} />
                <span>+22% за месяц</span>
              </div>
            </div>
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