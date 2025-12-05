import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ProfileTabProps {
  achievements: Array<{
    id: number;
    name: string;
    icon: string;
    unlocked: boolean;
  }>;
}

const ProfileTab = ({ achievements }: ProfileTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default ProfileTab;
