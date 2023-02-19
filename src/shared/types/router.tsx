import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line andreibread-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutersProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
