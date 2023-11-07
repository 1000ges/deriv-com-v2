import { SearchBlock } from '@deriv-com/blocks';
import { FAQData } from './data';
import { CustomLink } from '@deriv-com/components';
import { useState } from 'react';
import { searchString } from '@deriv-com/utils';
import { FAQSearchResults } from '../../types';
import { getHelpCentreLink } from './components';
import { Text } from '@deriv/quill-design';

export type SearchResultsProps = {
  onSearchKeyChange: (searchKey: string) => void;
};

export const SearchResults = ({ onSearchKeyChange }: SearchResultsProps) => {
  const [results, setResults] = useState<FAQSearchResults[]>([]);
  const [searchKey, setSearchKey] = useState('');

  const showSearchresults = (query: string) => {
    const final_matches: FAQSearchResults[] = [];

    FAQData.forEach(({ header, questions }) => {
      const matches = searchString(query, questions);

      if (matches.length) {
        final_matches.push({
          header,
          questions: matches,
        });
      }
    });

    setResults(final_matches);
    onSearchKeyChange(query);
  };

  return (
    <SearchBlock
      placeholder='Try "Trade"'
      showSearchresults={showSearchresults}
      onChange={(e) => setSearchKey(e)}
      content={
        <div className="flex flex-col items-start gap-general-md">
          {searchKey !== '' && <Text size="lg">Results for “{searchKey}”</Text>}
          {results.map(({ header, questions }) =>
            questions.map((question) => {
              return (
                <CustomLink
                  key={question}
                  href={getHelpCentreLink(header, question)}
                  className="justify-start"
                >
                  {question}
                </CustomLink>
              );
            }),
          )}
          {!results.length && searchKey && (
            <div className="flex w-full justify-center py-general-2xl">
              <Text size="lg">
                Sorry, we couldn’t find any results with "{searchKey}" in it
              </Text>
            </div>
          )}
        </div>
      }
    />
  );
};