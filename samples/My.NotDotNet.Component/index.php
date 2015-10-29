<?php

namespace My\NotDotNet\Component;

/**
 * Application class
 */
class Application
{
	private $message = ""; 
	
	function __construct()
	{
		$this->message = "Hello .NET Gulp plugin test!";
	}
	
	public function Run() {
		echo $this->message;
	}
}
