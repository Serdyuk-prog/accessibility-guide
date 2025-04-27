import './MainLayoutStyles.css';
import { MainFooter } from './ui/MainFooter/MainFooter';
import { MainHeader } from './ui/MainHeader/MainHeader';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="main-layout">
            <MainHeader />
            <main className="main-content">{children}</main>
            <MainFooter />
        </div>
    );
};
