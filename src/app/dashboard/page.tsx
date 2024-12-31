import { Card } from "@/components/Cards";
import { PrimaryButton } from "@/components/Buttons";

export default function Dashboard() {
  return (
    <main className="p-8 space-y-8">
      {/* Dashboard Header */}
      <section className="max-w-7xl mx-auto bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back, User!</h1>
            <p className="text-gray-600 dark:text-gray-300">Your music journey continues here</p>
          </div>
          <PrimaryButton label="Create New Battle" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'NFTs Owned', value: '23' },
            { label: 'Battles Won', value: '15' },
            { label: 'Total Rewards', value: '1,234' },
            { label: 'Rank', value: '#142' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 animate-fade-in-up">
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity & Collection */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <div className="space-y-4">
            {[1,2,3,4].map((activity) => (
              <div key={activity} className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <div>
                    <p className="font-medium">Activity #{activity}</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Collection */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your Collection</h2>
          <div className="grid gap-4">
            {[1,2,3].map((item) => (
              <Card
                key={item}
                title={`NFT #${item}`}
                description="From your music collection"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
