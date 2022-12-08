import * as React from 'react';
import stylesM from './molecule.module.scss';
import { ILoadPerformance, ILoadPerformanceOps } from './Interfaces/IPerformance';
import { SamplePerformance } from './Interfaces/sampleData';
import { createPerformanceTableVisitor } from './Atoms/ComponentAtoms';

export interface ISourcePagesProps {}
export interface ISourcePagesState {
  nothingHere: boolean;
}

export default class SourcePages extends React.Component<ISourcePagesProps, ISourcePagesState> {

  private _performance: ILoadPerformance;

  public constructor(props:ISourcePagesProps){
    super(props);
    //Just so it's initialized as empty fromt he start
    this._performance = {} as ILoadPerformance;
    this.state = {
      nothingHere: true,
    };
  }

  public async componentDidMount(): Promise<void> {
    //At some point, this gets updated so this just simulates getting this final data
    this._performance = SamplePerformance;
  }

  public componentDidUpdate(prevProps: ISourcePagesProps): void { }

  public render(): React.ReactElement<ISourcePagesProps> {

    const keysToShow: ILoadPerformanceOps[] = [ 'fetch0',  'fetch1',  'fetch2',  'fetch3',  'fetch4',  'fetch5',  'fetch6',  ];
    const PerformanceElement = createPerformanceTableVisitor( this._performance, keysToShow );

    return (
      <div className={ stylesM.moleculeContainer }>
        { PerformanceElement }
      </div>
    );
  }

}
