import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text } from '@/shared/ui/Text';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <Text text={t('Profile not found')} />
        );
    }

    return (
        <Page data-testid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
