import { createRootRoute, Outlet } from '@tanstack/react-router';
import AppSidebar from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Rnd } from 'react-rnd';
import { useRef, useState } from 'react';

const RootLayout = () => {
  const rndRef = useRef<Rnd | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleDoubleClick = () => {
    const rnd = rndRef.current;
    if (!rnd) return;

    const node = rnd.resizableElement.current as HTMLElement | null;
    if (!node || !node.parentElement) return;

    const parentRect = node.parentElement.getBoundingClientRect();

    if (!isMaximized) {
      rnd.updatePosition({ x: 50, y: 25 });
      rnd.updateSize({ width: '1500px', height: '900px' });
    } else {
      rnd.updatePosition({ x: 50, y: 25 });
      rnd.updateSize({ width: 1500, height: 900 });
    }
    setIsMaximized(!isMaximized);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="flex w-full h-screen bg-[url('./../../Background.jpeg')] bg-[length:100%] bg-no-repeat bg-center relative overflow-hidden">
          <AppSidebar />

          <div className="relative flex-1 overflow-hidden">
            <Rnd
              ref={rndRef}
              bounds="parent"
              default={{ 
                x: 50, 
                y: 25, 
                width: 1500, 
                height: 900 }}
              minWidth={1000}
              minHeight={600}
              style={{
                background: "#110E13",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
              dragHandleClassName="drag-handle"
            >
              <div className="flex flex-col h-full">
                <div
                  className="bg-[#110E13] rounded-t-3xl px-6 py-2 drag-handle cursor-move select-none"
                  onDoubleClick={handleDoubleClick}
                >
                  <Navbar />
                </div>

                <div className="flex-1 rounded-b-3xl bg-[#110E13] py-2 overflow-auto">
                  <Outlet />
                </div>
              </div>
            </Rnd>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export const Route = createRootRoute({ component: RootLayout });
