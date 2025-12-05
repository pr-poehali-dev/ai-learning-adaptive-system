import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DashboardTabProps {
  stats: {
    totalTests: number;
    completedTests: number;
    averageScore: number;
    streak: number;
  };
  upcomingTests: Array<{
    id: number;
    subject: string;
    date: string;
    progress: number;
    topics: number;
  }>;
  recentTests: Array<{
    id: number;
    subject: string;
    score: number;
    date: string;
    errors: number;
  }>;
}

const DashboardTab = ({ stats, upcomingTests, recentTests }: DashboardTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default DashboardTab;
