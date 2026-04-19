import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { WorkDetail } from './pages/WorkDetail';
import { SubProjectDetail } from './pages/SubProjectDetail';
import { StyleFactoryCaseStudy } from './pages/StyleFactoryCaseStudy';
import { GarletBrandingCaseStudy } from './pages/GarletBrandingCaseStudy';
import { PackagingDesignsCaseStudy } from './pages/PackagingDesignsCaseStudy';
import { SocialMediaCaseStudy } from './pages/SocialMediaCaseStudy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/work/:id',
    Component: WorkDetail,
  },
  {
    path: '/work/:areaId/:subProjectId',
    Component: SubProjectDetail,
  },
  {
    path: '/case-study/style-factory',
    Component: StyleFactoryCaseStudy,
  },
  {
    path: '/case-study/garlet-branding',
    Component: GarletBrandingCaseStudy,
  },
  {
    path: '/case-study/packaging-designs',
    Component: PackagingDesignsCaseStudy,
  },
  {
    path: '/case-study/social-media-designs',
    Component: SocialMediaCaseStudy,
  },
]);
