import prismadb from "@/lib/prismadb";

interface DasboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DasboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
