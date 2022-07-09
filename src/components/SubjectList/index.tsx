import {Wrapper, Topic} from './styles/topic-list';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

type Props = {
  subjectList: any[]
}

const SubjectList = ({subjectList} : Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    navigate({pathname: `?subjects=${subjectList[0]?.id ||'' }`});
  }, [navigate, subjectList]);

  return (
    <Wrapper>
      {subjectList.map(subject => (
        <Link key={subject.id} to={`/?subjects=${subject.id}`}>
          <Topic active={subject.id == searchParams.get('subjects')}>{subject.name}</Topic>
        </Link>

      ))}
    </Wrapper>
  );
};

export default SubjectList;
