branch=$(git branch 2>/dev/null | grep '^*' | colrm 1 2)
if [[ $branch == "main" ]]
then
	find . -type f -name "*.html" -print0 | xargs -0 sed -i 's|http://127.0.0.1/website/|https://ndd7xv.github.io/website/|g';

	if [ -f "$.htaccess" ] ; then
		rm "$.htaccess"
	fi
else
		echo "You are on branch '$branch.' Try switching to main before running this script."
fi
