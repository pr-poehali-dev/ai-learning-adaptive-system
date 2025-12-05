import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import DashboardTab from '@/components/DashboardTab';
import StudyTab from '@/components/StudyTab';
import TestsTab from '@/components/TestsTab';
import AnalyticsTab from '@/components/AnalyticsTab';
import ProfileTab from '@/components/ProfileTab';

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

          <TabsContent value="dashboard">
            <DashboardTab stats={stats} upcomingTests={upcomingTests} recentTests={recentTests} />
          </TabsContent>

          <TabsContent value="study">
            <StudyTab studyTopics={studyTopics} />
          </TabsContent>

          <TabsContent value="tests">
            <TestsTab />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsTab />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileTab achievements={achievements} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
