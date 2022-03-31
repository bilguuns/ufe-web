import { Component, ChangeEvent } from "react";
import IntroDataService from "pages/api/intro/service/intro.service";
import { Link } from "react-router-dom";
import IntroItem from "pages/api/intro/entity/intro.model";
type Props = {};
type State = {
  tutorials: Array<IntroItem>;
  currentTutorial: IntroItem | null;
  currentIndex: number;
  searchTitle: string;
};
export default class TutorialsList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }
  componentDidMount() {
    this.retrieveTutorials();
  }
  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }
  retrieveTutorials() {
    IntroDataService.getAll()
      .then((response: any) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }
  setActiveTutorial(tutorial: IntroItem, index: number) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() {
    <div className="col-md-6">
      <h4>Tutorials List</h4>
      <ul className="list-group">
        {tutorials &&
          tutorials.map((tutorial: IntroItem, index: number) => (
            <li
              className={
                "list-group-item " + (index === currentIndex ? "active" : "")
              }
              onClick={() => this.setActiveTutorial(tutorial, index)}
              key={index}
            >
              {tutorial.title}
            </li>
          ))}
      </ul>
    </div>;
  }
}
