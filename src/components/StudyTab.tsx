import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface StudyTabProps {
  studyTopics: Array<{
    id: number;
    name: string;
    progress: number;
    completed: number;
    total: number;
    difficulty: string;
  }>;
}

const StudyTab = ({ studyTopics }: StudyTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default StudyTab;
