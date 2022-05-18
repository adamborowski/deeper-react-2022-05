import { TreeView } from './TreeView';
import { data } from './data';

export default {};

export const Default = () => {
  return (
    <>
      <ul>
        <li>
          My Documents
          <ul>
            <li>
              My Pictures
              <ul>
                <li>pic1.jpg</li>
                <li>pic2.jpg</li>
              </ul>
            </li>
            <li>My Movies</li>
          </ul>
        </li>
      </ul>
      <hr />
      <TreeView data={data} />
    </>
  );
};

export const Test = () => (
  <ul>
    <p>
      <li>Hej</li>
    </p>
  </ul>
);
