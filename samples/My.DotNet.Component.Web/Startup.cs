// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

using Microsoft.AspNet.Builder;

public class Startup
{
	public void Configure(IApplicationBuilder app)
	{
		app.UseWelcomePage();
	}
}
