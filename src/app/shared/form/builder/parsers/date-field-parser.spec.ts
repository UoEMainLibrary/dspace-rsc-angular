import { FormFieldModel } from '../models/form-field.model';
import { DynamicConcatModel } from '../ds-dynamic-form-ui/models/ds-dynamic-concat.model';
import { SeriesFieldParser } from './series-field-parser';
import { DateFieldParser } from './date-field-parser';
import { DynamicDsDatePickerModel } from '../ds-dynamic-form-ui/models/date-picker/date-picker.model';

describe('DateFieldParser test suite', () => {
  let field: FormFieldModel;

  const initFormValues = {};
  const readOnly = false;

  beforeEach(() => {
    field = {
      input: {
        type: 'date'
      },
      label: 'Date of Issue.',
      mandatory: 'true',
      repeatable: false,
      hints: 'Please give the date of previous publication or public distribution. You can leave out the day and/or month if they aren\'t applicable.',
      mandatoryMessage: 'You must enter at least the year.',
      selectableMetadata: [
        {
          metadata: 'date',
        }
      ],
      languageCodes: []
    } as FormFieldModel;

  });

  it('should init parser properly', () => {
    const parser = new DateFieldParser(field, initFormValues, readOnly);

    expect(parser instanceof DateFieldParser).toBe(true);
  });

  it('should return a DynamicDsDatePickerModel object', () => {
    const parser = new DateFieldParser(field, initFormValues, readOnly);

    const fieldModel = parser.parse();

    expect(fieldModel instanceof DynamicDsDatePickerModel).toBe(true);
  });

});
